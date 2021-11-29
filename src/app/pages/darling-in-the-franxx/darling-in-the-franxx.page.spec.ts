import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DarlingInTheFranxxPage } from './darling-in-the-franxx.page';

describe('DarlingInTheFranxxPage', () => {
  let component: DarlingInTheFranxxPage;
  let fixture: ComponentFixture<DarlingInTheFranxxPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DarlingInTheFranxxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DarlingInTheFranxxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
