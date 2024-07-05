import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function InfoBox({ info }) {

    // let INIT_URL = 
    //   "https://images.pexels.com/photos/12058309/pexels-photo-12058309.jpeg?auto=compress&cs=tinysrgb&w=600"
    let HOT_URL =
      "https://images.pexels.com/photos/319930/pexels-photo-319930.jpeg?auto=compress&cs=tinysrgb&w=600";
    let COLD_URL =
      "https://images.pexels.com/photos/1003124/pexels-photo-1003124.jpeg?auto=compress&cs=tinysrgb&w=600";
    let RAIN_URL =
      "https://images.pexels.com/photos/268791/pexels-photo-268791.jpeg?auto=compress&cs=tinysrgb&w=600";

    return (
      <div className="InfoBox">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={ info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL }
              title="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  {info.city}
                  {         info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/> }
              </Typography>
              <Typography variant="body2" color="text.secondary" component={"span"}>
                  <p>Temperature = {info.temp}&deg;C </p>
                  <p>Humidity = {info.humidity}</p>
                  <p>Min Temp = {info.tempMin}&deg;C</p>
                  <p>Max Temp = {info.tempMax}&deg;C</p>
                  <p>The weather can be described a {info.weather} feels like {info.feelslike}&deg;C</p>
              </Typography>
            </CardContent>
          </Card>
        </div> 
      </div>
    );
}

export default InfoBox;