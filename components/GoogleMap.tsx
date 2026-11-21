type GoogleMapProps = {
    src: string;
};

export default function GoogleMap({ src }: GoogleMapProps) {
    return (
        <div className="mapContainer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1252.4155355009125!2d71.39914783509286!3d51.11157688280229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1795170762515!5m2!1sru!2skz" 
             
            style={{ border:0} }
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}