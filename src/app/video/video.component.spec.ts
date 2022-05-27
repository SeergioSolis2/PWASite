import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ VideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(VideoComponent);
    const app = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'pipesAngular'`, () => {
    const fixture = TestBed.createComponent(VideoComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pipesAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(VideoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pipesAngular app is running!');
  });
});