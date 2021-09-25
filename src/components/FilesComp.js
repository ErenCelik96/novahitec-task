import React, { useState } from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from "material-ui-dropzone";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';

function FilesComp() {
  const [fImage, setFimage] = useState(false);
  const [bImage, setBimage] = useState(false);
  const [file, setFile] = useState(false);

  // console.log("first image button: ",fImage);
  // console.log("second image button: ",bImage);
  // console.log("files: ",file);
  // console.log("send: ",file&&bImage&&fImage)


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
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundImage:'linear-gradient(45deg, rgba(245, 245, 245, 0.7) 30%, rgba(183,177,165,0.5) 30% 60%, rgba(245, 245, 245, 0.7) 60%)'
      }}>
      <label htmlFor="contained-button-file">
        <p>Please upload the <b>front</b> of your passport.</p><br/>
        <Input accept="image/*" id="contained-button-file" filesLimit={1} onChange={()=>setFimage(true)} type="file"/>
      </label>
      <label htmlFor="contained-button-file1">
      <p>Please upload the <b>back</b> of your passport.</p><br/>
        <Input accept="image/*" id="contained-button-file1" filesLimit={1} onChange={()=>setBimage(true)} type="file"/>
      </label>
      <p style={{marginBottom:'-40px'}}>Please upload your <b>payslip(s)</b>.</p>
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
          sx={{bgcolor: '#F5F5F5', color:'black'}}
        >
          Send
        </Button>
    </Box>
  );
}

export default FilesComp
