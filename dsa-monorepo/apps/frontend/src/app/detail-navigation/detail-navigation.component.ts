import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'app/domain/hero';
import { SkillGroup } from 'app/domain/skillgroup';
import { SpellGroup } from 'app/domain/spellGroup';
import { Router } from '@angular/router';


class MenuItem {

  title: String
  target: String
  detailArea: String


  constructor(config){
    this.title = config.title
    this.target = config.target
  }
}

@Component({
    selector: 'detail-navigation',
    templateUrl: './detail-navigation.component.html',
    styleUrls: ['./detail-navigation.component.css'],
    standalone: false
})
export class DetailNavigationComponent implements OnInit {

  @Input() hero: Hero
  isMagic: boolean
  skillGroups: Array<SkillGroup>
  spellGroups: Array<SpellGroup>
  menuVisible: boolean

  @Input()
  detailArea: String;

  @Output()
  navToArea: EventEmitter<String> = new EventEmitter<String>();
  

  menu: Array<Object>

  constructor(private elRef: ElementRef, private router: Router) { 
    this.detailArea = 'character'
  }

  ngOnInit() {
    this.updateNavigation()
  }

  updateNavigation() {
    let menu = [
      new MenuItem({title: 'Allgemein', target: 'Allgemein'}), 
    ]
    if(this.hero)
      this.hero.skillGroups.forEach(skillGroup => {
        menu.push(new MenuItem({title: skillGroup.getSkillGroup().name}))
      })
    this.menu = menu
  }

  toggleVisible() {
    this.menuVisible = !this.menuVisible
  }

  navToOverview() {
    this.router.navigate(['/player/heroes']);
  }

  navToEdit() {
    this.router.navigate([`/player/hero/${this.hero.id}/editStuff`]);
  }

  navTo(target) {
    let menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target]
    menuTarget.scrollIntoView()
  }

  navToSkillGroup(target) {
    let menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target.skillGroup.name]
    menuTarget.scrollIntoView()
  }

  navToSpellGroup(target) {
    let menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target.spellGroup.name]
    menuTarget.scrollIntoView()
  }

  updateDetailView(detailTarget) {
    this.detailArea = detailTarget
    this.navToArea.emit(detailTarget)
  }



  
}
