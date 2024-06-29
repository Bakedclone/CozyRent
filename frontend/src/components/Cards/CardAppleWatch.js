import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { Link } from "react-router-dom";

const CardAppleWatch = ({ prop }) => {
  return (
    <Card>
      <CardMedia sx={{ height: '18rem' }} image={prop.images[0].url} />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <h3 className="font-semibold text-3xl">
          {prop.name}
        </h3>
      </CardContent>
      <Link
        to={{
          pathname: '/selectproperty/booknow',
          state: { data: prop._id }
        }}>
        <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
          Book Now
        </Button>
      </Link>
    </Card>
  )
}

export default CardAppleWatch
