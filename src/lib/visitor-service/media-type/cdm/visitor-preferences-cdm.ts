import {ObjMap} from '@tangential/core'
//noinspection TypeScriptPreferShortImport
import {VisitorPreferencesDocModel} from '../doc-model/visitor-preferences-dm';

export class VisitorPreferencesCdm {
  hideCookieWarnings?: boolean = false
  hiddenTips?: ObjMap<boolean> = {}

  constructor() {
  }

  shouldShowTip(preferenceId: string) {
    return this.hiddenTips[preferenceId] !== true
  }

  hideTip(preferenceId: string) {
    this.hiddenTips[preferenceId] = true
  }

  toDocModel():VisitorPreferencesDocModel{
    return {
      hideCookieWarnings: this.hideCookieWarnings,
      hiddenTips: Object.assign({}, this.hiddenTips)
    }
  }

  static forGuest() {
    return new VisitorPreferencesCdm()
  }

  static from(json:VisitorPreferencesDocModel):VisitorPreferencesCdm {
    let prefs = new VisitorPreferencesCdm()
    prefs.hideCookieWarnings = json.hideCookieWarnings || false
    prefs.hiddenTips = json.hiddenTips || {}
    return prefs
  }
}
