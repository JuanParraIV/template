import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Pagination, PaginationItem } from '@mui/material';

export const Paginate = () => {
  return (
    <>
      <Pagination
        sx={{
          borderRadius: '20px',
          backgroundColor: '#fffcf8',
          boxShadow: '5px 4px 10px rgba(136, 6, 77, 0.25)',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem 1rem',
          gap: '0.25rem',
          fontFamily: 'Inter',
        }}
        color='primary'
        shape='rounded'
        siblingCount={0}
        boundaryCount={1}
        size='small'
        count={12}
        renderItem={(item) => (
          <PaginationItem
            sx={{
              width: '1.56rem',
              height: '1.56rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              boxSizing: 'border-box',
            }}
            slots={{
              previous: KeyboardArrowLeftIcon,
              next: KeyboardArrowRightIcon,
              first: KeyboardDoubleArrowLeftIcon,
              last: KeyboardDoubleArrowRightIcon
            }}
            {...item}
          />
        )}
        showFirstButton
        showLastButton />
    </>
  )
}

