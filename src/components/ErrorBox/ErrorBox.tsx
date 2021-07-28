import { Alert, Button } from "antd";

export interface IErrorBox {
    message:string;
    showIcon?:boolean;
    showRetryButton?:boolean;
    onRetryClick?:()=>void;
}

const ErrorBox = ({message, showIcon, showRetryButton, onRetryClick}:IErrorBox) => {
    return ( 
        <>
            <Alert
                message="Error"
                description={message}
                type="error"
                showIcon={showIcon}
                data-testid="error-box"
            />
            {
                showRetryButton && onRetryClick &&
                <div>                    
                    <Button type="primary" onClick={onRetryClick} style={{marginTop:"1rem"}} data-testid="retry-button">
                        Refresh
                    </Button>
                </div>
            }       
        </>
    );
};

export default ErrorBox;