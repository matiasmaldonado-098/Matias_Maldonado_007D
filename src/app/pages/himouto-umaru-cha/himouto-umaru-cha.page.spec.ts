import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HimoutoUmaruChaPage } from './himouto-umaru-cha.page';

describe('HimoutoUmaruChaPage', () => {
  let component: HimoutoUmaruChaPage;
  let fixture: ComponentFixture<HimoutoUmaruChaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HimoutoUmaruChaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HimoutoUmaruChaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
