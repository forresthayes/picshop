import AppLayout from 'src/layouts/AppLayout'
import Image from 'src/components/Image'
import { Grid } from '@chakra-ui/core'

import { Context } from 'src/context'

const HomePage = () => {
  const { allPhotos } = React.useContext(Context)

  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} i={i} />
  ))

  return (
    <AppLayout>
      <Grid
        p="10px"
        gap="2px"
        autoRows={200}
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        autoFlow="dense"
        className="photos"
      >
        {imageElements}
      </Grid>
    </AppLayout>
  )
}

export default HomePage
