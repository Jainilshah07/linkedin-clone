import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Container>
        <ShareBox>
          <div>
            <img src="images/user.svg" alt="logo" />
            <button>Start a post</button>
          </div>
          <div>
            <button>
              <img src="images/photo-icon.png" alt="icon" />
              <span>Photo</span>
            </button>

            <button>
              <img src="/images/video-icon.png" alt="icon" />
              <span>Video</span>
            </button>

            <button>
              <img src="images/event-icon.png" alt="icon" />
              <span>Event</span>
            </button>

            <button>
              <img src="/images/article-icon.png" alt="icon" />
              <span>Write Article</span>
            </button>
          </div>
        </ShareBox>
        <div>
          <Article>
            <SharedActor>
              <a>
                <img src="/images/user.svg" alt="" />
                <div>
                  <span>Title</span>
                  <span>Info</span>
                  <span>Date</span>
                </div>
              </a>
              <button>
                <img src="/images/ellipsis.svg" alt="" />
              </button>              
            </SharedActor>
            <Description>
              Description
            </Description>
            <SharedImg>
              <a>
                <img src="/images/user.svg" alt="" />
              </a>
            </SharedImg>
            <SocialCounts>
              <li>
                <button>
                  <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                  <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                  <span>70</span>
                </button> 
              </li>
              <li>
                <a>
                  2 Comments
                </a>
              </li>
            </SocialCounts>
            <SocialActions>
              <button>
                <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/20/000000/external-like-feedback-kmg-design-detailed-outline-kmg-design.png" alt="" />
                <span>Like</span>
              </button>
              <button>
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png" alt="" />
                <span>Comment</span>
              </button>
              <button>
                <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/20/000000/external-forward-essentials-prettycons-lineal-prettycons.png" alt="" />
                <span>Share</span>
              </button>
              <button>
                <img src="https://img.icons8.com/external-outline-juicy-fish/20/000000/external-send-contact-us-outline-outline-juicy-fish.png" alt="" />
                <span>Send</span>
              </button>
            </SocialActions>
          </Article>
        </div>
      </Container>
      
    </>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 14px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 2px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          font-weight: 600;
          color: rgba(0,0,0,0.6);
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;

`
const SharedActor = styled.div`
/* padding-right:  ; */
padding: 12px 16px 0;
flex-wrap: nowrap;
display: flex;
margin-bottom: 8px;
align-items: center;
a{
  margin-right: 12px;
  flex-grow: 1;
  overflow: hidden;
  display: flex;

  img{
    width: 48px;
    height: 48px;
  }
  & > div{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    overflow: hidden;

    span{
      padding-left: 12px ;
      text-align: left;
      &:first-child{
        font-size: 14px;
        font-weight: 700;
        font-weight: 700;
        color: rgba(0,0,0,1);
      }
      &:nth-child(n+1){
        font-size: 12px;
        color: rgba(0,0,0,0.6);
      }
    }
  }
}
button{
    position: absolute;
    right: 12px;
    background: transparent;
    border: none;
    outline: none;
  }
`
const Description = styled.div`
  padding: 0 16px ;
  text-align: left;
  font-size: 14px;
  color: rgba(0,0,0,0.9);
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  position: relative;
  display: block;
  background: #f9fafb;
  img{
    object-fit: contain;
    width: 100%;
    height: 100%; //Handle This 
  }

`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display:flex ;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  justify-content: space-between;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li{
    
    margin-right: 5px;
    font-size: 12px;
  }
  button{
    flex-wrap: nowrap;
    display: flex;
  }
  img {
      width: 25px;
    }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button{
    display: inline-flex;
    align-items: center;
    color: #0a66c2;
    padding: 8px;
  }
`  
export default Main;
