import {Component, HostBinding, ViewEncapsulation} from '@angular/core'
import {MdDialogRef} from '@angular/material'

import {IconIF} from '@tangential/components'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'


@Component({
  selector:      'choose-icon-dialog',
  templateUrl:   './choose-icon-dialog.html',
  styles:        [
      `
      .tanj-big .material-icons {
        font-size : 48px;
      }

      choose-icon-dialog .tanj-icon-container {
        margin : 2em;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class ChooseIconDialog {

  @HostBinding('attr.flex') flex = '';
  @HostBinding('attr.layout') flexLayout = 'column';
  @HostBinding('attr.layout-align') flexLayoutAlign = 'start center';

  icons: IconIF[] = [
    {font: 'material-icons', name: 'accessibility'},
    {font: 'material-icons', name: 'account_balance'},
    {font: 'material-icons', name: 'account_box'},
    {font: 'material-icons', name: 'account_circle'},
    {font: 'material-icons', name: 'add_shopping_cart'},
    {font: 'material-icons', name: 'alarm'},
    {font: 'material-icons', name: 'alarm_add'},
    {font: 'material-icons', name: 'alarm_off'},
    {font: 'material-icons', name: 'alarm_on'},
    {font: 'material-icons', name: 'announcement'},
    {font: 'material-icons', name: 'assignment'},
    {font: 'material-icons', name: 'backup'},
    {font: 'material-icons', name: 'bookmark_border'},
    {font: 'material-icons', name: 'bookmark'},
    {font: 'material-icons', name: 'build'},
    {font: 'material-icons', name: 'card_giftcard'},
    {font: 'material-icons', name: 'credit_card'},
    {font: 'material-icons', name: 'delete'},
    {font: 'material-icons', name: 'delete_forever'},
    {font: 'material-icons', name: 'done'},
    {font: 'material-icons', name: 'done_all'},
    {font: 'material-icons', name: 'euro_symbol'},
    {font: 'material-icons', name: 'event'},
    {font: 'material-icons', name: 'explore'},
    {font: 'material-icons', name: 'extension'},
    {font: 'material-icons', name: 'face'},
    {font: 'material-icons', name: 'favorite'},
    {font: 'material-icons', name: 'favorite_border'},
    {font: 'material-icons', name: 'feedback'},
    {font: 'material-icons', name: 'fingerprint'},
    {font: 'material-icons', name: 'flight_land'},
    {font: 'material-icons', name: 'flight_takeoff'},
    {font: 'material-icons', name: 'grade'},
    {font: 'material-icons', name: 'help'},
    {font: 'material-icons', name: 'help_outline'},
    {font: 'material-icons', name: 'highlight_off'},
    {font: 'material-icons', name: 'history'},
    {font: 'material-icons', name: 'home'},
    {font: 'material-icons', name: 'hourglass_empty'},
    {font: 'material-icons', name: 'hourglass_full'},
    {font: 'material-icons', name: 'lightbulb_outline'},
    {font: 'material-icons', name: 'list'},
    {font: 'material-icons', name: 'lock_open'},
    {font: 'material-icons', name: 'lock_outline'},
    {font: 'material-icons', name: 'motorcycle'},
    {font: 'material-icons', name: 'markunread_mailbox'},
    {font: 'material-icons', name: 'note_add'},
    {font: 'material-icons', name: 'pan_tool'},
    {font: 'material-icons', name: 'payment'},
    {font: 'material-icons', name: 'pets'},
    {font: 'material-icons', name: 'power_settings_new'},
    {font: 'material-icons', name: 'pregnant_woman'},
    {font: 'material-icons', name: 'print'},
    {font: 'material-icons', name: 'query_builder'},
    {font: 'material-icons', name: 'receipt'},
    {font: 'material-icons', name: 'redeem'},
    {font: 'material-icons', name: 'room'},
    {font: 'material-icons', name: 'rowing'},
    {font: 'material-icons', name: 'schedule'},
    {font: 'material-icons', name: 'search'},
    {font: 'material-icons', name: 'settings'},
    {font: 'material-icons', name: 'settings_phone'},
    {font: 'material-icons', name: 'shopping_basket'},
    {font: 'material-icons', name: 'shopping_cart'},
    {font: 'material-icons', name: 'speaker_notes'},
    {font: 'material-icons', name: 'spellcheck'},
    {font: 'material-icons', name: 'star_rate'},
    {font: 'material-icons', name: 'stars'},
    {font: 'material-icons', name: 'store'},
    {font: 'material-icons', name: 'theaters'},
    {font: 'material-icons', name: 'thumb_down'},
    {font: 'material-icons', name: 'thumb_up'},
    {font: 'material-icons', name: 'thumbs_up_down'},
    {font: 'material-icons', name: 'timeline'},
    {font: 'material-icons', name: 'translate'},
    {font: 'material-icons', name: 'trending_down'},
    {font: 'material-icons', name: 'trending_up'},
    {font: 'material-icons', name: 'visibility'},
    {font: 'material-icons', name: 'visibility_off'},
    {font: 'material-icons', name: 'watch_later'},
    {font: 'material-icons', name: 'work'},
    {font: 'material-icons', name: 'add_alert'},
    {font: 'material-icons', name: 'error_outline'},
    {font: 'material-icons', name: 'warning'},
    {font: 'material-icons', name: 'add_to_queue'},
    {font: 'material-icons', name: 'hearing'},
    {font: 'material-icons', name: 'mic'},
    {font: 'material-icons', name: 'mic_none'},
    {font: 'material-icons', name: 'movie'},
    {font: 'material-icons', name: 'music_video'},
    {font: 'material-icons', name: 'new_releases'},
    {font: 'material-icons', name: 'note'},
    {font: 'material-icons', name: 'pause_circle_outline'},
    {font: 'material-icons', name: 'play_arrow'},
    {font: 'material-icons', name: 'play_circle_filled'},
    {font: 'material-icons', name: 'play_circle_outline'},
    {font: 'material-icons', name: 'playlist_add'},
    {font: 'material-icons', name: 'queue'},
    {font: 'material-icons', name: 'shuffle'},
    {font: 'material-icons', name: 'snooze'},
    {font: 'material-icons', name: 'videocam'},
    {font: 'material-icons', name: 'volume_mute'},
    {font: 'material-icons', name: 'volume_down'},
    {font: 'material-icons', name: 'volume_up'},
    {font: 'material-icons', name: 'call'},
    {font: 'material-icons', name: 'call_end'},
    {font: 'material-icons', name: 'chat'},
    {font: 'material-icons', name: 'contact_mail'},
    {font: 'material-icons', name: 'contact_phone'},
    {font: 'material-icons', name: 'dialpad'},
    {font: 'material-icons', name: 'email'},
    {font: 'material-icons', name: 'phone'},
    {font: 'material-icons', name: 'ring_volume'},
    {font: 'material-icons', name: 'voicemail'},
    {font: 'material-icons', name: 'add'},
    {font: 'material-icons', name: 'add_box'},
    {font: 'material-icons', name: 'add_circle'},
    {font: 'material-icons', name: 'add_circle_outline'},
    {font: 'material-icons', name: 'archive'},
    {font: 'material-icons', name: 'backspace'},
    {font: 'material-icons', name: 'block'},
    {font: 'material-icons', name: 'clear'},
    {font: 'material-icons', name: 'content_copy'},
    {font: 'material-icons', name: 'content_cut'},
    {font: 'material-icons', name: 'content_paste'},
    {font: 'material-icons', name: 'create'},
    {font: 'material-icons', name: 'delete_sweep'},
    {font: 'material-icons', name: 'remove'},
    {font: 'material-icons', name: 'remove_circle'},
    {font: 'material-icons', name: 'remove_circle_outline'},
    {font: 'material-icons', name: 'reply'},
    {font: 'material-icons', name: 'reply_all'},
    {font: 'material-icons', name: 'report'},
    {font: 'material-icons', name: 'save'},
    {font: 'material-icons', name: 'weekend'},
    {font: 'material-icons', name: 'airplanemode_active'},
    {font: 'material-icons', name: 'airplanemode_inactive'},
    {font: 'material-icons', name: 'battery_alert'},
    {font: 'material-icons', name: 'sd_storage'},
    {font: 'material-icons', name: 'battery_charging_full'},
    {font: 'material-icons', name: 'attach_money'},
    {font: 'material-icons', name: 'border_color'},
    {font: 'material-icons', name: 'attach_file'},
    {font: 'material-icons', name: 'format_paint'},
    {font: 'material-icons', name: 'format_quote'},
    {font: 'material-icons', name: 'functions'},
    {font: 'material-icons', name: 'insert_chart'},
    {font: 'material-icons', name: 'insert_emoticon'},
    {font: 'material-icons', name: 'insert_link'},
    {font: 'material-icons', name: 'insert_photo'},
    {font: 'material-icons', name: 'monetization_on'},
    {font: 'material-icons', name: 'money_off'},
    {font: 'material-icons', name: 'multiline_chart'},
    {font: 'material-icons', name: 'pie_chart'},
    {font: 'material-icons', name: 'publish'},
    {font: 'material-icons', name: 'cloud'},
    {font: 'material-icons', name: 'cloud_circle'},
    {font: 'material-icons', name: 'cloud_done'},
    {font: 'material-icons', name: 'cloud_download'},
    {font: 'material-icons', name: 'cloud_off'},
    {font: 'material-icons', name: 'cloud_queue'},
    {font: 'material-icons', name: 'cloud_upload'},
    {font: 'material-icons', name: 'headset'},
    {font: 'material-icons', name: 'gamepad'},
    {font: 'material-icons', name: 'headset_mic'},
    {font: 'material-icons', name: 'keyboard_hide'},
    {font: 'material-icons', name: 'memory'},
    {font: 'material-icons', name: 'mouse'},
    {font: 'material-icons', name: 'laptop_mac'},
    {font: 'material-icons', name: 'phone_iphone'},
    {font: 'material-icons', name: 'security'},
    {font: 'material-icons', name: 'sim_card'},
    {font: 'material-icons', name: 'speaker'},
    {font: 'material-icons', name: 'toys'},
    {font: 'material-icons', name: 'videogame_asset'},
    {font: 'material-icons', name: 'watch'},
    {font: 'material-icons', name: 'add_a_photo'},
    {font: 'material-icons', name: 'assistant'},
    {font: 'material-icons', name: 'assistant_photo'},
    {font: 'material-icons', name: 'audiotrack'},
    {font: 'material-icons', name: 'brush'},
    {font: 'material-icons', name: 'camera'},
    {font: 'material-icons', name: 'camera_alt'},
    {font: 'material-icons', name: 'camera_roll'},
    {font: 'material-icons', name: 'colorize'},
    {font: 'material-icons', name: 'edit'},
    {font: 'material-icons', name: 'filter_drama'},
    {font: 'material-icons', name: 'flash_auto'},
    {font: 'material-icons', name: 'flash_off'},
    {font: 'material-icons', name: 'flash_on'},
    {font: 'material-icons', name: 'palette'},
    {font: 'material-icons', name: 'panorama'},
    {font: 'material-icons', name: 'photo'},
    {font: 'material-icons', name: 'photo_camera'},
    {font: 'material-icons', name: 'remove_red_eye'},
    {font: 'material-icons', name: 'portrait'},
    {font: 'material-icons', name: 'tag_faces'},
    {font: 'material-icons', name: 'directions_bike'},
    {font: 'material-icons', name: 'add_location'},
    {font: 'material-icons', name: 'directions_boat'},
    {font: 'material-icons', name: 'directions_bus'},
    {font: 'material-icons', name: 'directions_car'},
    {font: 'material-icons', name: 'directions_railway'},
    {font: 'material-icons', name: 'directions_run'},
    {font: 'material-icons', name: 'directions_subway'},
    {font: 'material-icons', name: 'directions_transit'},
    {font: 'material-icons', name: 'directions_walk'},
    {font: 'material-icons', name: 'ev_station'},
    {font: 'material-icons', name: 'flight'},
    {font: 'material-icons', name: 'hotel'},
    {font: 'material-icons', name: 'local_airport'},
    {font: 'material-icons', name: 'local_bar'},
    {font: 'material-icons', name: 'local_cafe'},
    {font: 'material-icons', name: 'local_atm'},
    {font: 'material-icons', name: 'local_dining'},
    {font: 'material-icons', name: 'local_drink'},
    {font: 'material-icons', name: 'local_florist'},
    {font: 'material-icons', name: 'local_gas_station'},
    {font: 'material-icons', name: 'local_grocery_store'},
    {font: 'material-icons', name: 'local_hospital'},
    {font: 'material-icons', name: 'local_hotel'},
    {font: 'material-icons', name: 'local_library'},
    {font: 'material-icons', name: 'local_mall'},
    {font: 'material-icons', name: 'local_movies'},
    {font: 'material-icons', name: 'local_parking'},
    {font: 'material-icons', name: 'local_pharmacy'},
    {font: 'material-icons', name: 'local_pizza'},
    {font: 'material-icons', name: 'local_play'},
    {font: 'material-icons', name: 'local_post_office'},
    {font: 'material-icons', name: 'local_printshop'},
    {font: 'material-icons', name: 'local_shipping'},
    {font: 'material-icons', name: 'local_taxi'},
    {font: 'material-icons', name: 'map'},
    {font: 'material-icons', name: 'my_location'},
    {font: 'material-icons', name: 'person_pin'},
    {font: 'material-icons', name: 'person_pin_circle'},
    {font: 'material-icons', name: 'restaurant'},
    {font: 'material-icons', name: 'restaurant_menu'},
    {font: 'material-icons', name: 'subway'},
    {font: 'material-icons', name: 'traffic'},
    {font: 'material-icons', name: 'train'},
    {font: 'material-icons', name: 'tram'},
    {font: 'material-icons', name: 'cancel'},
    {font: 'material-icons', name: 'check'},
    {font: 'material-icons', name: 'close'},
    {font: 'material-icons', name: 'power'},
    {font: 'material-icons', name: 'priority_high'},
    {font: 'material-icons', name: 'all_inclusive'},
    {font: 'material-icons', name: 'ac_unit'},
    {font: 'material-icons', name: 'beach_access'},
    {font: 'material-icons', name: 'child_friendly'},
    {font: 'material-icons', name: 'child_care'},
    {font: 'material-icons', name: 'fitness_center'},
    {font: 'material-icons', name: 'free_breakfast'},
    {font: 'material-icons', name: 'hot_tub'},
    {font: 'material-icons', name: 'golf_course'},
    {font: 'material-icons', name: 'pool'},
    {font: 'material-icons', name: 'room_service'},
    {font: 'material-icons', name: 'smoke_free'},
    {font: 'material-icons', name: 'smoking_rooms'},
    {font: 'material-icons', name: 'cake'},
    {font: 'material-icons', name: 'location_city'},
    {font: 'material-icons', name: 'mood'},
    {font: 'material-icons', name: 'mood_bad'},
    {font: 'material-icons', name: 'public'},
    {font: 'material-icons', name: 'school'},
    {font: 'material-icons', name: 'sentiment_dissatisfied'},
    {font: 'material-icons', name: 'sentiment_neutral'},
    {font: 'material-icons', name: 'sentiment_satisfied'},
    {font: 'material-icons', name: 'sentiment_very_dissatisfied'},
    {font: 'material-icons', name: 'sentiment_very_satisfied'},
    {font: 'material-icons', name: 'whatshot'},
    {font: 'material-icons', name: 'check_box'},
    {font: 'material-icons', name: 'share'},
    {font: 'material-icons', name: 'check_box_outline_blank'},
    {font: 'material-icons', name: 'indeterminate_check_box'},
    {font: 'material-icons', name: 'radio_button_checked'},
    {font: 'material-icons', name: 'radio_button_unchecked'},
    {font: 'material-icons', name: 'star'},
    {font: 'material-icons', name: 'star_border'},
    {font: 'material-icons', name: 'star_half'}]

  filteredIcons: IconIF[] = []
  filterSubject: BehaviorSubject<string> = new BehaviorSubject('')

  constructor(public dialogRef: MdDialogRef<ChooseIconDialog>) {
    this.filteredIcons = this.icons
    this.filterSubject = new BehaviorSubject('')
    this.filterSubject.debounceTime(100).subscribe((filterText: string) => {
      this._filterIcons(filterText);
    })
  }

  private _filterIcons(filterText: string) {
    if (filterText === '') {
      this.filteredIcons = this.icons;
    } else {
      this.filteredIcons = this.icons.filter((icon) => {
        return icon.name.indexOf(filterText.toLowerCase()) > -1
      })
    }
  }

  onFilterIconsTextChange(filter: string) {
    this.filterSubject.next(filter)
  }

  onIconClicked(icon: IconIF) {
    this.dialogRef.close(icon)
  }
}