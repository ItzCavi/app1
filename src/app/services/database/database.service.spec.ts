import { TestBed } from '@angular/core/testing';
import { DatabaseService } from './database.service';

// Mock SQLite plugin
const mockSQLite = {
  createConnection: jasmine.createSpy('createConnection').and.returnValue(Promise.resolve({
    open: jasmine.createSpy('open').and.returnValue(Promise.resolve()),
    close: jasmine.createSpy('close').and.returnValue(Promise.resolve()),
    execute: jasmine.createSpy('execute').and.returnValue(Promise.resolve())
  }))
};

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'SQLite', useValue: mockSQLite }
      ]
    });
    service = TestBed.inject(DatabaseService);
    // Override sqlite property with mock
    (service as any).sqlite = mockSQLite;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize the database', async () => {
    try {
      await service.initializeDatabase();
      // If no error, test passes
      expect(true).toBeTrue();
    } catch (error) {
      fail('Database initialization failed: ' + error);
    }
  });
});
