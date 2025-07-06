import { useGetBorrowQuery } from '@/redux/api/baseApi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowQuery(undefined);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-24 w-full rounded-lg" />
        <Skeleton className="h-24 w-full rounded-lg" />
      </div>
    );
  }

  if (isError || !data?.success) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load borrow summary.</AlertDescription>
      </Alert>
    );
  }

  return (
    <div>
        <h2 className='text-xl md:text-2xl font-semibold  my-4 text-center'>Borrowed Books Summary</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.data.map((item, index) => (
        <Card key={index} className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {item.book?.title || 'Unknown Book'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <p><strong>ISBN:</strong> {item.book?.isbn}</p>
            <p><strong>Total Borrowed:</strong> {item.totalQuantity}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default BorrowSummary;
