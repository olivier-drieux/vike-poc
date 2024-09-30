import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react';
import { useData } from 'vike-react/useData';
import type { User } from '../../database/drizzle/schema/user-schema';
import type { UsersData } from './+data';

export default function Page() {
    const { users } = useData<UsersData>();

    const columns = React.useMemo<ColumnDef<User>[]>(
        () => [
            {
                header: 'Username',
                accessorKey: 'username',
            },
            {
                header: 'Email',
                accessorKey: 'email',
            },
            {
                header: 'Created at',
                accessorKey: 'createdAt',
                cell: ({ row }) =>
                    row.original.createdAt ? new Date(row.original.createdAt).toLocaleDateString('fr-FR') : '-',
            },
        ],
        []
    );

    const table = useReactTable({
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className='overflow-x-auto'>
            <table className='table'>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <tr key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className='h-24 text-center'>
                                No results.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
