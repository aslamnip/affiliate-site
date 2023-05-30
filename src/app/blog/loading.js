import Styles from './OurWork.module.css'
export default function Loading() {

    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div style={{marginTop : "25px"}} >
            <div className={Styles.loadingFlex}>
                <div className={Styles.loading}>
                    <div className={Styles.loadingImage} />
                    <div className={Styles.loadingTitle} />
                    <div className={Styles.loadingTitle} />
                </div>
                <div className={Styles.loading}>
                    <div className={Styles.loadingImage} />
                    <div className={Styles.loadingTitle} />
                    <div className={Styles.loadingTitle} />
                </div>
            </div>
            <div className={Styles.loadingFlex}>
                <div className={Styles.loading}>
                    <div className={Styles.loadingImage} />
                    <div className={Styles.loadingTitle} />
                    <div className={Styles.loadingTitle} />
                </div>
                <div className={Styles.loading}>
                    <div className={Styles.loadingImage} />
                    <div className={Styles.loadingTitle} />
                    <div className={Styles.loadingTitle} />
                </div>
            </div>
            <div className={Styles.loadingFlex}>
                <div className={Styles.loading}>
                    <div className={Styles.loadingImage} />
                    <div className={Styles.loadingTitle} />
                    <div className={Styles.loadingTitle} />
                </div>
                <div className={Styles.loading}>
                    <div className={Styles.loadingImage} />
                    <div className={Styles.loadingTitle} />
                    <div className={Styles.loadingTitle} />
                </div>
            </div>
        </div>
    );
}