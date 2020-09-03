import ULVhsys from '../rodape/ULVhsys';
import ULAprenda from '../rodape/ULAprenda';
import ULFunciona from '../rodape/ULFunciona';
import ULInteragir from '../rodape/ULInteragir';
import ULFones from '../rodape/ULFones';

const RodapeDefault = () => (
    <section>
        <div className='rodapeContainer'>
            <hr />
            <ULVhsys />
            <ULAprenda />
            <ULFunciona />
            <ULInteragir />
            <ULFones />
        </div>
    <style jsx>{`
        section {
            background-color: #174676;
            color: #ffffff;
            margin: 0;
            padding: 5px 0 0;
            text-align:center;
        }
        .rodapeContainer {
            width: 90%;
            max-width: 1200px;
            margin:0 auto;
        }
        hr {
            width: 100%;
            border: 0;
            border-top: 1px solid #416c98;
            padding: 10px 0 0;
            margin: 0px auto 0;
        }
        @media (max-width:1350px) {
            section {
                text-align:left;
            }
        }
    `}</style>
    </section>
)

export default RodapeDefault