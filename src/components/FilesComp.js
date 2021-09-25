import React, { useState } from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from "material-ui-dropzone";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';

function FilesComp() {

  //first input
  const [firstImage, setFirstImage] = useState(false);
  //second input
  const [secondImage, setSecondImage] = useState(false);
  //dropzone
  const [file, setFile] = useState(false);


  //DropZoneArea style
  const useStyles = makeStyles(theme => createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 150
    },
  }));
  const classes = useStyles();

  return (
    <Box
      sx={{
        width: '50vw',
        height: '75vh',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(45deg, rgba(245, 245, 245, 0.7) 30%, rgba(183,177,165,0.5) 30% 60%, rgba(245, 245, 245, 0.7) 60%)'
      }}>
      <label htmlFor="contained-button-file">
        <p>Please upload the <b>front</b> of your passport.</p><br />
        <Input accept="image/*" id="contained-button-file" filesLimit={1} onChange={() => setFirstImage(true)} type="file" />
      </label>
      <label htmlFor="contained-button-file1">
        <p>Please upload the <b>back</b> of your passport.</p><br />
        <Input accept="image/*" id="contained-button-file1" filesLimit={1} onChange={() => setSecondImage(true)} type="file" />
      </label>
      <p style={{ marginBottom: '-40px' }}>Please upload your <b>payslip(s)</b>.</p>
      <Box sx={{
        width: '20vw',
        height: '25vh',
        bgcolor: 'white'
      }}>
        <DropzoneArea
          showPreviews={false}
          showPreviewsInDropzone={true}
          useChipsForPreview
          previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
          previewChipProps={{ classes: { root: classes.previewChip } }}
          previewText="Selected files"
          filesLimit={20}
          onChange={(files) => files.length === 0 ? setFile(false) : setFile(true)} //Here we check the length of the array inside the dropzone
        />
      </Box>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        disabled={file && secondImage && firstImage ? false : true} //Here we decide whether the button is active or not
        sx={{ bgcolor: '#F5F5F5', color: 'black' }}
      >
        Send
      </Button>
    </Box>
  );
}

export default FilesComp;
