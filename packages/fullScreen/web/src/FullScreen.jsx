import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { closeIcon, expandIcon, shrinkIcon } from './icons';
import layouts from 'wix-rich-content-plugin-gallery/dist/lib/layout-data-provider';
import resizeMediaUrl from 'wix-rich-content-plugin-gallery/dist/lib/resize-media-url';
import PropTypes from 'prop-types';
import styles from './fullscreen.rtlignore.scss';
import fscreen from 'fscreen';

const { ProGallery } = require('pro-gallery');

export default class Fullscreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isInFullscreen: false };
  }

  static getDerivedStateFromProps(props, state) {
    const { index } = props;
    return index === state.currentIdx ? null : { ...state, currentIdx: index };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEsc);
    window.addEventListener('resize', this.onWindowResize);
    this.addFullscreenChangeListener();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEsc);
    window.removeEventListener('resize', this.onWindowResize);
    this.removeFullscreenChangeListener();
  }

  addFullscreenChangeListener = () => {
    if (fscreen.fullscreenEnabled) {
      fscreen.addEventListener('fullscreenchange', this.onFullscreenChange);
    }
  };

  removeFullscreenChangeListener = () => {
    if (fscreen.fullscreenEnabled) {
      fscreen.removeEventListener('fullscreenchange', this.onFullscreenChange);
    }
  };

  onWindowResize = () => this.forceUpdate();

  onFullscreenChange = () => this.setState({ isInFullscreen: !!fscreen.fullscreenElement });

  onEsc = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  toggleFullscreenMode = () => {
    const { isInFullscreen } = this.state;
    if (fscreen.fullscreenEnabled) {
      isInFullscreen ? fscreen.exitFullscreen() : fscreen.requestFullscreen(document.body);
    }
  };

  getStyleParams = () => {
    const { isInFullscreen } = this.state;
    let arrowsPosition = 0;
    let slideshowInfoSize = 0;
    if (this.props.isMobile) {
      slideshowInfoSize = 154;
    } else if (!isInFullscreen) {
      arrowsPosition = 1;
      slideshowInfoSize = 142;
    }
    return { arrowsPosition, slideshowInfoSize };
  };

  onClose = () => {
    if (this.state.isInFullscreen) {
      this.toggleFullscreenMode();
    }
    this.props.onClose();
  };

  renderCloseButton = () => {
    const { foregroundColor } = this.props;
    return (
      <button
        className={styles.close}
        style={foregroundColor}
        onClick={() => this.onClose()}
        aria-label={'Close'}
        data-hook={'fullscreen-close-button'}
      >
        {closeIcon()}
      </button>
    );
  };

  renderFullscreenToggleButton = () => {
    const { isInFullscreen } = this.state;
    const { foregroundColor } = this.props;
    const icon = isInFullscreen ? shrinkIcon : expandIcon;
    const ariaLabel = isInFullscreen ? 'Shrink' : 'Expand';
    return (
      <button
        className={styles.expand_button}
        style={foregroundColor}
        onClick={this.toggleFullscreenMode}
        aria-label={ariaLabel}
        data-hook={'fullscreen-toggle-button'}
      >
        {icon()}
      </button>
    );
  };

  handleGalleryEvents = (name, data) => {
    const { images } = this.props;
    if (name === 'CURRENT_ITEM_CHANGED') {
      // the new item must be either left or right to the previous item
      // needs to be removed once PG allows tracking current item index
      let { currentIdx } = this.state;
      currentIdx = data === images[currentIdx - 1] ? currentIdx - 1 : currentIdx + 1;
      this.setState({ currentIdx });
    }
  };

  render() {
    const { isOpen, target, backgroundColor, topMargin, images, isMobile } = this.props;
    const { currentIdx, isInFullscreen } = this.state;
    const { arrowsPosition, slideshowInfoSize } = this.getStyleParams();
    const width = isInFullscreen || isMobile ? window.innerWidth : window.innerWidth - 14;
    const height = isInFullscreen ? window.screen.height : window.innerHeight;
    let fullscreen = (
      <div style={{ ...backgroundColor, ...topMargin }} dir="ltr">
        {this.renderCloseButton()}
        {!isMobile && this.renderFullscreenToggleButton()}
        <div className={isInFullscreen ? styles.fullscreen_mode : styles.expand_mode}>
          <ProGallery
            items={images}
            currentIdx={currentIdx}
            eventsListener={this.handleGalleryEvents}
            resizeMediaUrl={resizeMediaUrl}
            container={{ width, height }}
            styles={{
              ...layouts[5],
              galleryLayout: 5,
              cubeType: 'fit',
              scrollSnap: true,
              videoPlay: 'auto',
              allowSocial: false,
              loveButton: false,
              allowTitle: true,
              showArrows: !isMobile,
              arrowsPosition,
              slideshowInfoSize,
            }}
          />
        </div>
      </div>
    );

    if (target) {
      fullscreen = ReactDOM.createPortal(fullscreen, target);
    }

    return isOpen ? fullscreen : null;
  }
}

Fullscreen.propTypes = {
  images: PropTypes.array.isRequired,
  isOpen: PropTypes.bool,
  isMobile: PropTypes.bool,
  index: PropTypes.number,
  topMargin: PropTypes.object,
  backgroundColor: PropTypes.object,
  foregroundColor: PropTypes.object,
  onClose: PropTypes.func,
  target: PropTypes.elementType,
};
