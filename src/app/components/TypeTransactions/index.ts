import styled from "styled-components";

const STATUS_COLORS = {
	yellow: "#FA8C10",
	purple: "#8357DC",
} as const;
  
interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
}
  
export const TypeTransactions = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: ${(props) => 
            `${STATUS_COLORS[props.statusColor]}`
        }
    }
`;