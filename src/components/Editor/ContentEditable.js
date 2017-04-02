import React from 'react'
import ContentEditable from '../../vendor/content-editable-component'
import cn from '../../utils/cn'

class ExtendedContentEditable extends ContentEditable {
  render() {
    const { className, style } = this.props

    return (
      <pre
        ref={this.onRef}
        className={cn('prism-code', className)}
        style={style}
        contentEditable
        onKeyDown={evt => {
          // NOTE: This prevents bad default behaviour
          if (evt.keyCode === 9) {
            document.execCommand('insertHTML', false, '&#009')
            evt.preventDefault()
          }
        }}
        onKeyUp={this.onChange}
        onClick={this.onChange}
        dangerouslySetInnerHTML={{ __html: this.state.html }}
      />
    );
  }
}

export default ExtendedContentEditable