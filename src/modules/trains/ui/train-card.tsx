import {Button, Card} from "antd";
import classes from './train-card.module.scss'



function TrainCard() {
    return (
        <div>
            <Card className={classes.trainCard} title="22426 - VANDE BHARAT" extra={<a href="#">More</a>}>

                <p>Runs on</p>
                <Button style={{cursor: 'text'}} color="cyan" variant="outlined">
                    Everyday
                </Button>

                <div className={classes.mainInfo}>
                    <div className={classes.departureInfo}>
                        <p className={classes.date}>Nov 16</p>
                        <p>11:25 pm</p>
                        <p>New Delhi - NDLS</p>

                    </div>
                    <p className={classes.duration}>8 hours</p>
                    <div className={classes.arrivalInfo}>
                        <p className={classes.date}>Nov 17</p>
                        <p>7:25 am</p>
                        <p>Lucknow - LJN</p>

                    </div>

                </div>

            </Card>
        </div>
    );
}
export default TrainCard;