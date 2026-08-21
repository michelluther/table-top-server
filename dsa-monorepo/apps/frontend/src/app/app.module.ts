import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CredentialsInterceptor } from './credentials.interceptor';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule, MatDialogRef
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import 'hammerjs';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { AdminTimerComponent } from './admin-timer/admin-timer.component';
import { AdventureDisplayComponent } from './adventure-display/adventure-display.component';
import { AppComponent } from './app.component';
import { AttributesDisplayComponent } from './attributes-display/attributes-display.component';
import { BasicDataDisplayComponent } from './basic-data-display/basic-data-display.component';
import { ChooseImageComponent } from './choose-image/choose-image.component';
import { CombatDataDisplayComponent } from './combat-data-display/combat-data-display.component';
import { CombatantComponent } from './combatant/combatant.component';
import { ConfirmDeletionComponent } from './confirm-deletion/confirm-deletion.component';
import { ConfirmationSheetComponent } from './confirmation-sheet/confirmation-sheet.component';
import { DetailNavigationComponent } from './detail-navigation/detail-navigation.component';
import { IsGoodFighter, MatchesCombatantSearchTerm } from './domain/fight';
import { EditAttributeComponent } from './edit-attribute/edit-attribute.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { EditMoneyComponent } from './edit-money/edit-money.component';
import { EditSpellComponent } from './edit-spell/edit-spell.component';
import { EditTalentComponent } from './edit-talent/edit-talent.component';
import { ExperienceAdditionComponent } from './experience-addition/experience-addition.component';
import { ExperienceDisplayComponent } from './experience-display/experience-display.component';
import { FightDisplayComponent } from './fight-display/fight-display.component';
import { FightSetupComponent } from './fight-setup/fight-setup.component';
import { HeroCard } from './hero-card/hero-card.component';
import { HeroControls } from './hero-controls/hero-controls.component';
import { HeroDetailComponent } from './herodetail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { InventoryDisplayComponent } from './inventory-display/inventory-display.component';
import { LifeDisplayComponent } from './life-display/life-display.component';
import { MagicDisplayComponent } from './magic-display/magic-display.component';
import { MasterComponent } from './master/master.component';
import { MasterMapsComponent } from './master-maps/master-maps.component';
import { Menu } from './menu/menu.component';
import { PlayerComponent } from './player/player.component';
import { RemoteControlReceiverComponent } from './remote-control-receiver/remote-control-receiver.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { SpellCard } from './spell-card/spell-card.component';
import { SpellSearchComponent } from './spell-search/spell-search.component';
import { MatchesSpellSearchTerm, MatchesSpellSearchTermChildren } from './spell-search/spell.pipe';
import { TalentCard } from './talent-card/talent-card.component';
import { MatchesTalentSearchTerm, MatchesTalentSearchTermChildren } from './talent-search/skill.pipe';
import { TalentSearchComponent } from './talent-search/talent-search.component';
import { TimerDialogComponent } from './timer-dialog/timer-dialog.component';






const routes: Routes = [
  // { path: '', redirectTo: 'player', pathMatch: 'full' },
  // { path: 'player/hero/:id', component: HeroDetailComponent },
  // { path: 'player', component: PlayerComponent, outlet: 'appRouter' },
  { path: '', redirectTo: 'player/heroes', pathMatch: 'full' },
  {
    path: 'master', component: AdminOverviewComponent,
    children: [
      { path: 'adventure', component: HeroesComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'hero/:id', component: HeroDetailComponent },
      { path: 'fight/start', component: FightSetupComponent },
      { path: 'startTimer', component: AdminTimerComponent },
      { path: 'images', component: MasterMapsComponent }
    ]
  },
  {
    path: 'player', component: PlayerComponent,
    children: [
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'hero/:id',
        component: HeroDetailComponent
      },
      {
        path: 'hero/:id/editStuff',
        component: EditDialogComponent
      }
    ]
  },
];


@NgModule({ exports: [
        MatDialogModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroControls,
        HeroCard,
        Menu,
        TalentCard,
        SpellCard,
        AdminOverviewComponent,
        FightSetupComponent,
        FightDisplayComponent,
        RemoteControlComponent,
        RemoteControlReceiverComponent,
        PlayerComponent,
        MasterComponent,
        MasterMapsComponent,
        ImagePopupComponent,
        ChooseImageComponent,
        LifeDisplayComponent,
        ScrollSpyDirective,
        MagicDisplayComponent,
        TalentSearchComponent,
        MatchesTalentSearchTerm,
        MatchesTalentSearchTermChildren,
        MatchesSpellSearchTerm,
        MatchesSpellSearchTermChildren,
        DetailNavigationComponent,
        AttributesDisplayComponent,
        BasicDataDisplayComponent,
        CombatDataDisplayComponent,
        InventoryDisplayComponent,
        EditDialogComponent,
        EditAttributeComponent,
        ExperienceDisplayComponent,
        SpellSearchComponent,
        EditTalentComponent,
        ConfirmationSheetComponent,
        ConfirmDeletionComponent,
        ExperienceAdditionComponent,
        EditMoneyComponent,
        AdventureDisplayComponent,
        CombatantComponent,
        MatchesCombatantSearchTerm,
        IsGoodFighter,
        AdminTimerComponent,
        TimerDialogComponent,
        EditSpellComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top',
            initialNavigation: 'enabledBlocking'
        }),
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatSelectModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })], providers: [{
            provide: MatDialogRef,
            useValue: {}
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CredentialsInterceptor,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
