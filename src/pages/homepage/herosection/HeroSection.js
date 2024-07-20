import Button from '../../../components/button/Button';
import './HeroSection.scss';

export default function HeroSection(){
    return(
        <div className="section">
            <div className="col">
                <h1 className='title'>Qual é o nosso objetivo?</h1>
                <p className='info'>
                    Nostrud eu reprehenderit excepteur velit sit. Mollit magna amet deserunt aliquip anim magna exercitation non sunt. Laborum est ad commodo magna deserunt ullamco occaecat.               
                </p>
                <Button/>
            </div>
            <div className="col">
                col2
            </div>
        </div>
    )
}