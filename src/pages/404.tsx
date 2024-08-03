import {Header} from "../entity/main-page";
import Wrapper404 from "../entity/404/components/wrapper";
import Content404 from "../entity/404/components/content";

const Error404 = () => {
    return (
        <Wrapper404>
            <Header />
            <Content404 />
        </Wrapper404>
    )
}

export default Error404;