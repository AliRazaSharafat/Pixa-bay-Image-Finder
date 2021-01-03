import React, { Component } from 'react'
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ZoomInSharpIcon from '@material-ui/icons/ZoomInSharp';
import Dialog from '@material-ui/core/Dialog';

class ImageResult extends Component {
    state = {
        open: false,
        currentImage: ''
    }

    handleOpen = img => {
        this.setState({ open: true, currentImage: img })
    }
    handleClose = img => {
        this.setState({ open: false })
    }

    render() {
        let imageListContent;
        const { images } = this.props;
        if (images) {
            imageListContent = (
                <GridList cols={3}>
                    {images.map(img => (
                        <GridListTile key={img.id}>
                            <img src={img.largeImageURL} alt="" />
                            <GridListTileBar
                                title={img.tags}
                                subtitle={<span>by  <strong>{img.user}</strong></span>}
                                actionIcon={
                                    <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                        <ZoomInSharpIcon style={{ color: 'white' }} />
                                    </IconButton>
                                } />
                        </GridListTile>
                    ))}
                </GridList>
            )
        } else {
            imageListContent = null
        }

        return (
            <div>
                {imageListContent}
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                    <img src={this.state.currentImage} alt="" style={{ width: '100%' }} />
                </Dialog>
            </div>
        )
    }
}

//Prop-Types
ImageResult.propTypes = {
    images: PropTypes.array.isRequired
}
export default ImageResult;
