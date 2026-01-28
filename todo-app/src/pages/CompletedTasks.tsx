import TodoList from "../components/TodoList";
import Card from "../components/ui/Card";

export default function CompletedTasks() {
    return (
        <div className="container mx-auto px-4 py-6 sm:py-8 max-w-3xl">
            <Card>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">Completed Tasks</h1>
                <TodoList filter="completed" />
            </Card>
        </div>
    );
}

