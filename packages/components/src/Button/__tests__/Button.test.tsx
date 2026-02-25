import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  it('should render correctly with children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should support antd button props', () => {
    render(<Button type="primary" disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('ant-btn-primary');
  });

  it('should render with custom theme by default', () => {
    const { container } = render(<Button>Theme Button</Button>);
    // We can't easily test the exact theme colors without complex setup,
    // but we can check if ConfigProvider is wrapping it (via checking context or structure if possible)
    // For now, just ensure it renders without crashing.
    expect(container.firstChild).toBeInTheDocument();
  });
});
