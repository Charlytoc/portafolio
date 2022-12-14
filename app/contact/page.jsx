import Footer from "../components/footer";

export default function Contact () {


    return <>
    <div className="row mt-5">
        <div className="col-lg-5 ms-5 pe-3">
            <div>
                <small>CONTACT</small>
                <h1>Get in touch - Let's work together</h1></div>
            <div><h1 className="text-secondary fs-4">ADRESS</h1>
            <h2 className="text-dark fs-4">Charly Chacon <br />
Guayaquil
<br />
Ecuador</h2></div>
        </div>
        <div className="col-lg-6">
            <div className="w-100"><p className="fs-3 w-100">Got a project? Drop me a line if you want to work together on something exciting. Big or small. Mobile or web.</p>
            <form action="https://formspree.io/f/xaykrgrk" method="POST" >
                <div className="w-100 d-flex">
                    <div className="col-lg-6 mt-5 p-2"><label className="grot d-block form-control border-0" htmlFor="name">Your name</label><input className="p-3 w-100 border-0 form-control" name="name" placeholder="What's your name?" id="name"  type="text" /></div>
                    <div  className="col-lg-6 mt-5 p-2"><label className="grot d-block form-control border-0" htmlFor="email">Your email</label><input name="email" className="p-3 w-100 form-control border-0" placeholder="What's your email?" id="email"  type="text" /></div>
                    </div>
                    <div className="w-100">
                    <div className="col-lg-12 mt-5 p-2"> <label className="grot d-block form-control border-0" htmlFor="service">Services</label><select name="services" className="border-0 w-100 form-control p-3 text-secondary"  id="service">
                        <option value="-1">What are you interested in?</option>
                        <option>Job offer</option>
                    </select></div>
                    <div className="col-lg-12 mt-5 p-2">
                    <textarea name="comments" className="form-control border-0" placeholder="What's your message?"  id="comments" cols="13" rows="8"></textarea>
                    </div>
                    <div className="col-lg-12 mt-5 p-2">
                        {/* <h1  className="fs-3 clickeable d-inline-block">??????Send message</h1> */}
                        <button type="submit" className="btn btn-lg">SEND</button>
                    </div>

                    
                    </div>
                    </form></div>
        </div>

    </div>
    <Footer />
       </>
}