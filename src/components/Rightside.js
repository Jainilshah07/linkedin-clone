import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <Artcard>
        <NewsList>
          <a>
            <span style={{ color: "rgba(0, 0, 0, 1)" }}>
              Linked In News
              <img src="/images/feed-icon.svg" alt="" />
            </span>
          </a>
          <a>
            <span>
              Khalistan flags found tied on Himachal Pradesh assembly's gate, CM
              says ‘cowardly act’
            </span>
          </a>
          <a>
            <span>
              China-backed John Lee replaces Carrie Lam as new Hong Kong leader
            </span>
          </a>
          <a>
            <span>
              2 terrorists, including Lashkar member, trapped in J&K's Kulgam as
              encounter continues
            </span>
          </a>
          <a>
            <span> Show More</span>
          </a>
        </NewsList>
      </Artcard>
      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;
`;
const Artcard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  a {
    padding: 5px;
    &:hover {
      color: #0a66c2;
    }
    span {
      color: brown;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:first-child {
      font-size: 18px;
      font-weight: 500;
    }
    &:last-child{
      color: rgba(0, 0, 0, 0.8);
      border-top:1px solid rgba(0, 0, 0, 0.6);
      &:hover {
        background-color: rgba(0, 0, 0, 0.09);
      }
    } 
  }
`;
const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const BannerCard = styled(Artcard)`
  img {
    width: 100%;
    height: 100%;
  }
`;
export default Rightside;
