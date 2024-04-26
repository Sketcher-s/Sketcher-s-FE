import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;
const MessageStyle = styled.div`
  color: #ff8888;
  font-size: 0.8rem;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 1.5rem;
  word-wrap: break-word;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
`;
const Message = ({ title }) => {
  return (
    <MessageContainer>
      <MessageStyle>{title}</MessageStyle>
    </MessageContainer>
  );
};
export default Message;
