import React, { useState } from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from "material-ui-dropzone";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';



function FilesComp() {
  const [fImage, setFimage] = useState(false);
  const [bImage, setBimage] = useState(false);
  const [file, setFile] = useState(false);

  console.log("first image button: ",fImage);
  console.log("second image button: ",bImage);
  console.log("files: ",file);
  console.log("send: ",file&&bImage&&fImage)

//To hide inputs
  const Input = styled('input')({
    display: 'none',
  });

//Dropzoneare style
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
        bgcolor: 'primary.dark',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}>
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span"  sx={{ bgcolor: 'orange' }}>
          Upload
        </Button>
        <Input accept="image/*" id="contained-button-file" filesLimit={1} onChange={()=>setFimage(true)} type="file" />
      </label>
      <label htmlFor="contained-button-file1">
        <Button variant="contained" component="span"  sx={{ bgcolor: 'orange' }}>
          Upload
        </Button>
        <Input accept="image/*" id="contained-button-file1" filesLimit={1} onChange={()=>setBimage(true)} type="file" />
      </label>
      <Box sx={{
        width: '20vw',
        height: '25vh',
        bgcolor: 'white'
      }}>
        <DropzoneArea
          multiple={false}
          showPreviews={false}
          showPreviewsInDropzone={true}
          useChipsForPreview
          previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
          previewChipProps={{ classes: { root: classes.previewChip } }}
          previewText="Selected files"
          filesLimit={20}
          onChange={(files)=>files.length === 0 ? setFile(false) : setFile(true)}
        />
      </Box>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disabled={file&&bImage&&fImage ? false : true}
        >
          Send
        </Button>
    </Box>
  );
}

export default FilesComp
