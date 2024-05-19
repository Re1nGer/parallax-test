import DarkBlur from '../../assets/dark_blur.svg';
import PostgresIcon from '../../assets/postgres_icon.svg';


const Postgres = () => {
    return <div className="group flex max-w-[56px] max-h-[54px] h-[54px] items-center w-full rounded-md justify-center gr_icon relative z-10">
        <img src={PostgresIcon.src} className="max-w-[32px] max-h-[37px] w-full h-full relative z-20 top-1 text-dark_blue"
               alt="postgres" />
        <img src={DarkBlur.src}
               className="group-active:opacity-100 transition-opacity max-w-[40px] max-h-[40px] h-full w-full top-3 opacity-50 absolute z-0"
               alt="postgres blur" />
    </div>
}

export default Postgres;

