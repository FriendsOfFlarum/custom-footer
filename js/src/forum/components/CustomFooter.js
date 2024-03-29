import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';

export default class CustomFooter extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.open = false;

    const js = app.forum.attribute('fof-custom-footer.js');
    if (js) {
      $('body').append(`<script>${js.trim()}</script>`);
    }
  }

  view() {
    return (
      <div id="CustomFooter" className={this.open && 'showing'}>
        <div className="container">
          <div className="Footer--Content" style={`height: ${this.open ? app.forum.attribute('fof-custom-footer.height') || 50 : 0}px;`}>
            {m.trust(app.forum.attribute('fof-custom-footer.text') || '')}
          </div>
          <div className="Footer--Icons">
            <i className={`Footer--Show fas fa-info-circle ${this.open && 'hidden'}`} onclick={() => (this.open = true)} />
            <i className={`Footer--Hide fas fa-caret-down ${!this.open && 'hidden'}`} onclick={() => (this.open = false)} />
          </div>
        </div>
      </div>
    );
  }
}
