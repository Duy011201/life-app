import { EndpointManagerComponent } from './../../pages/main/endpoint-manager/endpoint-manager.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import routerUrl from 'src/app/sections/data/routerUrl';
import { CONSTANT } from 'src/app/sections/data/constant';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: routerUrl.configConnect.root,
        loadComponent: () =>
          import('src/app/sections/pages/main/config-connect/config-connect.component').then((c) => c.ConfigConnectComponent)
      },
      {
        path: routerUrl.configPeel.root,
        loadComponent: () => import('src/app/sections/pages/main/config-peel/config-peel.component').then((c) => c.ConfigPeelComponent)
      },
      {
        path: routerUrl.endpoint.root,
        loadComponent: () =>
          import('src/app/sections/pages/main/endpoint-manager/endpoint-manager.component').then((c) => c.EndpointManagerComponent)
      },
      {
        path: routerUrl.reviewDossier.root,
        loadChildren: () =>
          import('src/app/sections/pages/main/view-dossier/view-dossier-routing/view-dossier-routing.module').then(
            (c) => c.ViewDossierModule
          ),
        data: { currentType: CONSTANT.CURRENT_DATA_DOSSIER.REVIEW }
      },
      {
        path: routerUrl.transferDossier.root,
        loadChildren: () =>
          import('src/app/sections/pages/main/view-dossier/view-dossier-routing/view-dossier-routing.module').then(
            (c) => c.ViewDossierModule
          ),
        data: { currentType: CONSTANT.CURRENT_DATA_DOSSIER.TRANSFER }
      },
      {
        path: routerUrl.personalInfo.root,
        loadChildren: () =>
          import('src/app/sections/pages/main/view-dossier/view-dossier-routing/view-dossier-routing.module').then(
            (c) => c.ViewDossierModule
          ),
        data: { currentType: CONSTANT.CURRENT_DATA_DOSSIER.PERSONAL_INFO }
      },
      {
        path: routerUrl.statistic.root.main,
        children: [
          {
            path: routerUrl.statistic.extractFromBirthRegistration.root,
            loadComponent: () =>
              import(
                'src/app/sections/pages/main/statistic/extract-from-birth-registration/extract-from-birth-registration.component'
              ).then((c) => c.ExtractFromBirthRegistrationComponent)
          },
          {
            path: routerUrl.statistic.extractFromRegisMariage.root,
            loadComponent: () =>
              import('src/app/sections/pages/main/statistic/extract-from-regis-mariage/extract-from-regis-mariage.component').then(
                (c) => c.ExtractFromRegisMariageComponent
              )
          },
          {
            path: routerUrl.statistic.extractFromDeathCertificateCitizenship.root,
            loadComponent: () =>
              import(
                'src/app/sections/pages/main/statistic/extract-from-death-certificate-citizenship/extract-from-death-certificate-citizenship.component'
              ).then((c) => c.ExtractFromDeathCertificateCitizenshipComponent)
          },
          {
            path: routerUrl.statistic.citizensUpdateHouseholdRegistration.root,
            loadComponent: () =>
              import(
                'src/app/sections/pages/main/statistic/citizens-update-household-registration/citizens-update-household-registration.component'
              ).then((c) => c.CitizensUpdateHouseholdRegistrationComponent)
          },
          {
            path: routerUrl.statistic.citizensUpdateRedefineNation.root,
            loadComponent: () =>
              import(
                'src/app/sections/pages/main/statistic/citizens-update-redefine-nation/citizens-update-redefine-nation.component'
              ).then((c) => c.CitizensUpdateRedefineNationComponent)
          },
          {
            path: routerUrl.statistic.citizensUpdateGender.root,
            loadComponent: () =>
              import('src/app/sections/pages/main/statistic/citizens-update-gender/citizens-update-gender.component').then(
                (c) => c.CitizensUpdateGenderComponent
              )
          },
          {
            path: routerUrl.statistic.citizensUpdateAdditionalBirthRegistration.root,
            loadComponent: () =>
              import(
                'src/app/sections/pages/main/statistic/citizens-update-additional-birth-registration/citizens-update-additional-birth-registration.component'
              ).then((c) => c.CitizensUpdateAdditionalBirthRegistrationComponent)
          },
          {
            path: routerUrl.statistic.citizensUpdateMaritalStatus.root,
            loadComponent: () =>
              import('src/app/sections/pages/main/statistic/citizens-update-marital-status/citizens-update-marital-status.component').then(
                (c) => c.CitizensUpdateMaritalStatusComponent
              )
          },
          {
            path: routerUrl.statistic.citizensUpdatePersonalRelationshipFamily.root,
            loadComponent: () =>
              import(
                'src/app/sections/pages/main/statistic/citizens-update-personal-relationship-family/citizens-update-personal-relationship-family.component'
              ).then((c) => c.CitizensUpdatePersonalRelationshipFamilyComponent)
          },
          {
            path: routerUrl.statistic.citizensUpdateGuardianRegistration.root,
            loadComponent: () =>
              import(
                'src/app/sections/pages/main/statistic/citizens-update-guardian-registration/citizens-update-guardian-registration.component'
              ).then((c) => c.CitizensUpdateGuardianRegistrationComponent)
          },
          {
            path: routerUrl.statistic.citizensUpdateMonitorGuardianRegistration.root,
            loadComponent: () =>
              import(
                'src/app/sections/pages/main/statistic/citizens-update-monitor-guardian-registration/citizens-update-monitor-guardian-registration.component'
              ).then((c) => c.CitizensUpdateMonitorGuardianRegistrationComponent)
          },
          {
            path: routerUrl.statistic.citizensResidencyManagement.root,
            loadComponent: () =>
              import('src/app/sections/pages/main/statistic/citizens-residency-management/citizens-residency-management.component').then(
                (c) => c.CitizensResidencyManagementComponent
              )
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRouterModule {}
