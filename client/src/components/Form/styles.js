export const paper = {
    padding: '7%',
    backgroundColor: '#746969',
    color: 'white'
};

export const form = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

export const buttonSubmit = {
    marginBottom: 3,
    backgroundColor: '#A13434'
};

export const formItem = {
    marginBottom: 2,
    '& .MuiFilledInput-root': {
        color: 'white',
        borderBottom: '1px solid white !important',
      },
      '& .MuiFilledInput-underline:before': {
        borderBottomColor: 'green !important',
      },
      '& .MuiFilledInput-underline:hover:before': {
        borderBottomColor: 'white !important',
      },
      '& .MuiInputLabel-root': {
        color: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white !important',
        },
        '&:hover fieldset': {
          borderColor: 'white !important',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white !important',
        },
        '&.Mui-focused': {
            color: 'white',
          },
        color: 'white',
      },
      
};
