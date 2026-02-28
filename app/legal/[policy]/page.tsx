export default function GenericPolicyPage({ params }: { params: { policy: string } }) {
    const policyName = params.policy.charAt(0).toUpperCase() + params.policy.slice(1);
    return (
        <article className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-bold mb-6">{policyName} Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">This is a placeholder policy document for {policyName}.</p>

            <h2>1. Overview</h2>
            <p>Content for {policyName} goes here. In Version 2, the exact legal wording will be provided here.</p>
        </article>
    );
}

// Generate static params for the other legal routes to satisfy the requirement
export async function generateStaticParams() {
    return [
        { policy: "customs" },
        { policy: "packaging" },
        { policy: "refunds" },
        { policy: "privacy" },
    ];
}
