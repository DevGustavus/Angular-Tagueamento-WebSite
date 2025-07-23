/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, Injectable } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { GoogleAnalyticsCategoria } from '../interfaces/gtm/google-analytics-categoria.const';
import { GoogleAnalyticsAction } from '../interfaces/gtm/google-analytics-action.const';
import { GoogleAnalyticsLabel } from '../interfaces/gtm/google-analytics-label.const';
import { GoogleAnalyticsView } from '../interfaces/gtm/google-analytics-view.const';

@Injectable({
  providedIn: 'root',
})
export class GtmService {
  private gtmService = inject(GoogleTagManagerService);

  logEvent(params: {
    category: string;
    action: string;
    label: string;
    qtdetitulos?: string;
    customCategory?: string;
    customAction?: string;
    customLabel?: string;
    customQtdTitulos?: string;
  }) {
    const interactionEvent: any = {
      event: 'interaction',
      Custom_Category:
        params.customCategory || GoogleAnalyticsCategoria[params.category],
      Custom_Action:
        params.customAction || GoogleAnalyticsAction[params.action],
      Custom_Label: params.customLabel || GoogleAnalyticsLabel[params.label],
    };

    const qtdFinal =
      params.customQtdTitulos ||
      (params.qtdetitulos ? GoogleAnalyticsLabel[params.qtdetitulos] : null);
    if (qtdFinal) {
      interactionEvent.Custom_QtdTitulos = qtdFinal;
    }

    this.gtmService.pushTag(interactionEvent);
    console.log('Interaction Event:', interactionEvent);
  }

  logPageView(params: {
    pathname: string;
    funcionalidade: string;
    titulo: string;
  }) {
    const pageViewEvent = {
      event: 'pageView',
      page: {
        pagepath: GoogleAnalyticsView[params.pathname],
        ambiente: 'angular-tagueamento-web-site.vercel.app',
        funcionalidade: GoogleAnalyticsView[params.funcionalidade],
        titulo: GoogleAnalyticsView[params.titulo],
        nome: `angular-tagueamento-web-site:${GoogleAnalyticsView[params.funcionalidade]}`,
      },
    };

    this.gtmService.pushTag(pageViewEvent);
    console.log('pageView:', pageViewEvent);
  }
}
