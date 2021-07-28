import { Spin } from "antd";
import messages from "../../utils/messages";

const Spinner = () => {
    return <Spin size="large" tip={messages.loading} data-testid="custom-spinner" />;
};

export default Spinner;