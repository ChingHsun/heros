import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHeroList } from "../utils/api";

const HeroListPage = () => {
    const [heroList, setHeroList] = useState([]);
    useEffect(() => {
        getHeroList().then(resp => {
            console.log(resp)
            setHeroList(resp)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (<Row gutter="xs">

        {
            heroList?.map(hero => (
                <Col span="xs" key={hero.id}>
                    <Link to={`/heroes/${hero.id}`}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={hero.name} src={hero.image} />}
                        >
                            <Meta title={hero.name} />
                        </Card>
                    </Link>
                </Col>
            ))
        }
    </Row>)
}

export default HeroListPage;