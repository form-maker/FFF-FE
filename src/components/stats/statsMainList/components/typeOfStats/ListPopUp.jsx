import React from "react";
import styled from "styled-components";

const ListPopUp = ({ closePop, stats }) => {
  return (
    <Container>
      <PopContainer>
        <Header>
          <button onClick={closePop}>✕</button>
        </Header>
        <Main>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>자료</th>
              </tr>
            </thead>
            {stats?.descriptiveList?.descriptiveDataList?.map((data, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{data}</td>
              </tr>
            ))}
          </table>
        </Main>
      </PopContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 15;
`;

const PopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90rem;
  height: 76%;
  background-color: white;
  border-radius: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 1rem;
  width: 100%;
  height: 5rem;

  font-size: 1.5rem;

  background: ${({ theme }) => theme.subHoverColor1};
  border-radius: 1rem 1rem 0 0;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: white;
    border: none;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  padding: 5rem 0;
  table {
    font-size: 1.4rem;
    width: 90%;
    border-collapse: collapse;
    border-radius: 0.5rem;
    overflow: hidden;
    thead {
      font-weight: bold;
      color: #fff;
      background: ${({ theme }) => theme.pointColor2};
      tr {
        th {
          padding: 0.5rem;
        }
      }
    }
    tr {
      td {
        font-size: 1.2rem;
        padding: 1rem 0.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        background: #fff;
        &:nth-child(1) {
          width: 3rem;
          font-weight: 700;
          padding-left: 2rem;
        }
        &:nth-child(2) {
          text-align: center;
        }
      }
    }
  }
`;

export default ListPopUp;
