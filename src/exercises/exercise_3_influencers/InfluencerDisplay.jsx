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
  margin: 2rem 0;
`;

const Field = styled.div`
  flex: ${props => props.field === 'Title' ? '2.4' : '1'} 1 0;
`;

const TitleRow = styled.div`
  display: flex;
  padding: 0 1rem;

  & div {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #516e7b;
  }
`;

const InfluencerRow = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0.25rem;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  border-left: 4px solid ${props => PRIORITY_COLOR_MAP[props.priority]};
`;

const InfluencerDisplay = ({ data }) => {
  const fields = Object.keys(DATA_MAP);
  return (
    <Container>
      <TitleRow>
        {fields.map((field) => (
          <Field key={`TitleRow_${field}`} field={field}>{field}</Field>
        ))}
      </TitleRow>
      {data.map(influencer => (
        <InfluencerRow key={influencer.member} priority={influencer.priority}>
          {fields.map((field) => (
            <Field key={`${influencer.member}_${field}`} field={field}>
              <p>{influencer[DATA_MAP[field]]}</p>
            </Field>
          ))}
        </InfluencerRow>
      ))}
    </Container>
  );
}

export default InfluencerDisplay;
