import { VoterComponent } from './voter.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser'

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create voter', () => {
    expect(component).toBeTruthy();
  });

  it('should render total votes',()=>{
    component.othersVote = 20;
    component.myVote = 1;
    let de  = fixture.debugElement.query(By.css('.vote-count'));
    let el : HTMLElement = de.nativeElement;

    fixture.detectChanges();

    
    expect(el.innerText).toBe('21');
  });

  it('should highlight the upvote button if upvote',()=>{
    component.myVote = 1;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  })

  it('should increase total votes when i click the upvote',()=>{
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click',null);

    expect(component.totalVotes).toBe(1);
  })
});
