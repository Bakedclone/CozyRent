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
        <h4 className="font-normal text-lg">
          {prop.name}
        </h4>
        <h4 className="font-semibold text-xl flex-inline">
        ₹{prop.price_per_month}. <span className="font-normal text-sm">/ month</span>
        </h4>
      </CardContent>
      <Link
        to={{
          pathname: '/selectfurniture/booknow',
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
