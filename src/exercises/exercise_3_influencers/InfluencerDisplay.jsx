import React from 'react'
import styled from 'styled-components'

const DATA_MAP = {
  'Member': 'member',
  'Type': 'influencerType',
  'Category': 'indicationCategory',
  'Affiliation': 'affiliation',
  'State': 'primaryState',
  'Priority': 'priority',
  'Title': 'affiliationPosition',
}

const PRIORITY_COLOR_MAP = {
  'High': '#ec2134',
  'Medium': '#f7ca28',
  'Low': '#24d68c',
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1rem;
  margin: 2rem 0;
`;

const InfluencerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-gap: 1rem 0.25rem;
  background-color: white;
  border-radius: 0.25rem;
  padding: 1rem;
  border-top: 4px solid ${props => PRIORITY_COLOR_MAP[props.priority]};
`;

const CardField = styled.div`
  ${props => props.field === 'Title' ? 'grid-column: span 2;' : ''}

  & h3 {
    font-size: 0.875rem;
    color: #577b8c;
    margin: 0 0 0.25rem;
  }
  & p {
    margin: 0;
  }
`;

const InfluencerDisplay = ({ data }) => {
  return (
    <Container>

      {data.map(influencer => (
        <InfluencerCard key={influencer.member} priority={influencer.priority}>
          {Object.keys(DATA_MAP).map((key) => (
            <CardField key={`${influencer.member}_${key}`} field={key}>
              <h3>{key}</h3>
              <p>{influencer[DATA_MAP[key]]}</p>
            </CardField>
          ))}
        </InfluencerCard>
      ))}
    </Container>
  );
}

export default InfluencerDisplay;
