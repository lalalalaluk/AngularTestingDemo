import { VoterComponent } from './voter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[VoterComponent]
    })

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render taotal votes',()=>{
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de =fixture.debugElement.query(By.css('.vote-count'));
    //fixture.debugElement.query(By.directive(VoterComponent));

    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');
  })

  
});
