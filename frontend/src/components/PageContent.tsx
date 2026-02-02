import "./PageContent.css"

type PageContentProps = {
    content: string;
};

export default function PageContent({ content }: PageContentProps) {
    return (
        <div className="page-content">
        {content}
        </div>
    );
}