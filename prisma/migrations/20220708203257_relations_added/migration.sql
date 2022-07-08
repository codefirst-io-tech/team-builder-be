-- CreateTable
CREATE TABLE "_MemberToOrganization" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MemberToOrganization_AB_unique" ON "_MemberToOrganization"("A", "B");

-- CreateIndex
CREATE INDEX "_MemberToOrganization_B_index" ON "_MemberToOrganization"("B");

-- AddForeignKey
ALTER TABLE "_MemberToOrganization" ADD CONSTRAINT "_MemberToOrganization_A_fkey" FOREIGN KEY ("A") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemberToOrganization" ADD CONSTRAINT "_MemberToOrganization_B_fkey" FOREIGN KEY ("B") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
