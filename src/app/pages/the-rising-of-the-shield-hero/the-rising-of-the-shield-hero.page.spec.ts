import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheRisingOfTheShieldHeroPage } from './the-rising-of-the-shield-hero.page';

describe('TheRisingOfTheShieldHeroPage', () => {
  let component: TheRisingOfTheShieldHeroPage;
  let fixture: ComponentFixture<TheRisingOfTheShieldHeroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRisingOfTheShieldHeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheRisingOfTheShieldHeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
