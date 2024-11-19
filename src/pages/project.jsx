
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Project() {
  return (
    <div className="min-h-screen">
      <h4 className="text-[#16325B] text-center mb-10 font-bold leading-loose text-3xl">
        Projects
      </h4>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className=" p-4">
          <h5
            className="text-center text-[#227B94] font-bold text-xl pb-3" 
          >
            InterviewAI
          </h5>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="./interviewai.png"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong>InterviewAI</strong> simulates interviews with AI-driven
                feedback using <strong>Next.js, Clerk, and Gemini API</strong>.
                It ensures secure authentication, efficient data management, and
                an intuitive, responsive design.
              </Typography>
            </CardContent>
            <CardActions className="flex justify-center mb-2">
              <Button  size="small" variant="contained" href="https://interviewai-black.vercel.app/">
                View Project
              </Button>
              <Button href="https://github.com/Avinash043/interviewai" size="small" variant="contained">
                Github
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className=" p-4">
        <h5
            className="text-center text-[#227B94] font-bold text-xl pb-3" 
          >
            NotesBox
          </h5>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="./notesbox.png"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong>NotesBox</strong> is a React.js and Tailwind app for
                note-taking, sharing, and QR code generation. Features include{" "}
                <strong>
                  Redux-based note organization, QR code and sharing
                </strong>
                , ensuring a responsive, user-friendly experience across devices
              </Typography>
            </CardContent>
            <CardActions className="flex justify-center mb-2">
              <Button size="small" variant="contained" href="https://notesbox.vercel.app/">
                View Project
              </Button>
              <Button size="small" href="https://github.com/Avinash043/notesbox" variant="contained">
                Github
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className=" p-4">
        <h5
            className="text-center text-[#227B94] font-bold text-xl pb-3" 
          >
            StayGo
          </h5>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="./stayGo.jpg"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong>StayGo</strong> is a Node.js-powered platform for booking accommodations.
                It features <strong>Passport.js</strong> authentication, <strong>Mapbox</strong>-integrated room
                locations, and <strong>Stripe</strong> for seamless rental payments.
              </Typography>
            </CardContent>
            <CardActions className="flex justify-center mb-2">
              <Button size="small" variant="contained" href="https://staygo.onrender.com/">
                View Project
              </Button>
              <Button size="small" href="https://github.com/Avinash043/StayGo" variant="contained">
                Github
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
