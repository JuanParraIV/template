import SearchIcon from '@mui/icons-material/Search'
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'

type FormEvent = React.FormEvent<HTMLFormElement>
type InputEvent = React.ChangeEvent<HTMLInputElement>

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('')
  const handleOnSearch = (event: InputEvent): void => {
    const { value } = event.target
    event?.preventDefault()
    setSearch('')
    setSearch(value)
  }
  const handleSubmit = (event: FormEvent): void => {
    event?.preventDefault()
    // fetch(search);
    console.log('click!!!')
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '100%',
      }}
    >
      <FormControl
        fullWidth
        sx={{
          position: 'relative',
          height: '2.75rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
        }}
      >
        <OutlinedInput
          fullWidth
          value={search}
          onChange={handleOnSearch}
          sx={{
            position: 'relative',
            borderRadius: '10px',
            backgroundColor: '#f86260',
            color: '#fff',
            width: '100%',
            height: '2.75rem',
            zIndex: 0,
          }}
          type="text"
          placeholder="buscar..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit" edge="end">
                <SearchIcon
                  sx={{
                    color: '#fff',
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  )
}
